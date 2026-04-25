import { useEffect, useRef, useState, Fragment } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Dialog, Transition } from "@headlessui/react";
import {
  FaFileDownload,
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
  FaUndo,
} from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ZOOM_STEP = 0.25;
const ZOOM_MIN = 0.5;
const ZOOM_MAX = 3;

function Cv() {
  const [isOpen, setIsOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [baseWidth, setBaseWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function measure() {
      if (containerRef.current) {
        const padding = 16;
        setBaseWidth(containerRef.current.clientWidth - padding);
      }
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [isOpen]);

  function openModal() {
    setZoom(1);
    setIsOpen(true);
  }

  function zoomIn() {
    setZoom((z) => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)));
  }
  function zoomOut() {
    setZoom((z) => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)));
  }
  function zoomReset() {
    setZoom(1);
  }

  const renderWidth = baseWidth > 0 ? baseWidth * zoom : undefined;

  return (
    <>
      <div className="">
        <button
          type="button"
          aria-label="Open CV preview"
          className="block mx-auto w-min cursor-zoom-in transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded"
          onClick={openModal}
        >
          <Document file="/ken_leong_cv.pdf">
            <Page
              pageNumber={1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={280}
            />
          </Document>
        </button>

        <div className="flex justify-center">
          <a
            href="/ken_leong_cv.pdf"
            download
            className="my-2 rounded-lg p-2 px-8 bg-slate-200/80 hover:bg-slate-200 text-slate-900 flex items-center justify-center"
          >
            <FaFileDownload className="mx-2 my-auto" />
            download
          </a>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start sm:items-center justify-center p-2 sm:p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-4xl rounded-lg bg-white shadow-xl text-slate-900">
                  <div className="sticky top-0 z-10 flex items-center justify-between gap-2 px-3 sm:px-4 py-3 border-b bg-white rounded-t-lg">
                    <Dialog.Title className="text-base sm:text-lg font-semibold truncate">
                      CV Preview
                    </Dialog.Title>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button
                        type="button"
                        aria-label="Zoom out"
                        className="rounded-md p-2 text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-transparent"
                        onClick={zoomOut}
                        disabled={zoom <= ZOOM_MIN}
                      >
                        <FaSearchMinus />
                      </button>
                      <span className="text-xs sm:text-sm tabular-nums w-12 text-center select-none">
                        {Math.round(zoom * 100)}%
                      </span>
                      <button
                        type="button"
                        aria-label="Zoom in"
                        className="rounded-md p-2 text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:hover:bg-transparent"
                        onClick={zoomIn}
                        disabled={zoom >= ZOOM_MAX}
                      >
                        <FaSearchPlus />
                      </button>
                      <button
                        type="button"
                        aria-label="Reset zoom"
                        className="rounded-md p-2 text-slate-700 hover:bg-slate-200 hidden sm:inline-flex"
                        onClick={zoomReset}
                      >
                        <FaUndo />
                      </button>
                      <a
                        href="/ken_leong_cv.pdf"
                        download
                        aria-label="Download CV"
                        className="rounded-md p-2 sm:px-3 bg-slate-200/80 hover:bg-slate-200 text-slate-900 flex items-center text-sm"
                      >
                        <FaFileDownload className="sm:mr-2" />
                        <span className="hidden sm:inline">download</span>
                      </a>
                      <button
                        type="button"
                        aria-label="Close"
                        className="rounded-md p-2 text-slate-700 hover:bg-slate-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={containerRef}
                    className="overflow-auto max-h-[80vh] bg-slate-100 p-2 sm:p-4 rounded-b-lg"
                  >
                    <div className="flex flex-col items-center min-w-min">
                      <Document
                        file="/ken_leong_cv.pdf"
                        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                      >
                        {Array.from({ length: numPages || 1 }, (_, i) => (
                          <div
                            key={`page_${i + 1}`}
                            className="mb-3 last:mb-0 shadow bg-white"
                          >
                            <Page
                              pageNumber={i + 1}
                              renderAnnotationLayer={false}
                              renderTextLayer={false}
                              width={renderWidth}
                            />
                          </div>
                        ))}
                      </Document>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Cv;
