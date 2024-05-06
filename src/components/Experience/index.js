import React, { useEffect, useState } from "react";


function Experience(props) {
return (
    <>
        <button className="my-2 rounded-lg p-4 w-80 bg-slate-200/80 hover:bg-slate-200 text-slate-900"
        onClick={() => window.open(props.url, '_blank')}>
            <p className="text-lg">{props.title}</p>
            <p className="text-xl tracking-wider leading-relaxed">{props.place}</p>

            <p>{props.time}</p>
        </button>
    </>
);
}

export default Experience;
