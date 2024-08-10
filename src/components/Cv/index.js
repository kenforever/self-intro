import { Document, Page, pdfjs } from "react-pdf";
import { FaEye, FaFileDownload } from "react-icons/fa";

function Cv() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

return (
    <>
        <div className="">
            <div className="mx-auto w-min">
                <Document file="/ken_leong_cv.pdf">
                    <Page
                        pageNumber={1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        width={280}
                    />
                </Document>
            </div>

            <div className="flex justify-center space-x-4">
                <button
                    className="my-2 rounded-lg p-2 px-8 bg-slate-200/80 hover:bg-slate-200 text-slate-900 flex items-center justify-center"
                    onClick={() => window.open("/ken_leong_cv.pdf", "_blank")}
                >
                    <FaEye className="mx-2 my-auto"/>
                    view
                </button>

                <a
                    href="/cv.pdf"
                    download
                    className="my-2 rounded-lg p-2 px-8 bg-slate-200/80 hover:bg-slate-200 text-slate-900 flex items-center justify-center"
                >
                    <FaFileDownload className="mx-2 my-auto"/>
                    download
                </a>
            </div>
        </div>
    </>
);
}

export default Cv;
