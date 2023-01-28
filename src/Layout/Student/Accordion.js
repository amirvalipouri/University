import { useState, useRef, useEffect } from "react";
export default function Accordion({ title = "", children = null }) {
  const accordion = useRef();
  const accordionCollapse = useRef();
  const accordionBody = useRef();

  const [state, setState] = useState(false);

  const handleChangeState = () => {
    accordion.current.classList.toggle("active", state);
    const height = accordionBody.current.getBoundingClientRect().height;
    if (state) {
      accordionCollapse.current.style.height = `${height}px`;
    } else {
      accordionCollapse.current.style.height = `${height}px`;
      requestAnimationFrame(() => {
        accordionCollapse.current.style.height = "";
      });
    }
    accordionCollapse.current.ontransitionend = () => {
      accordionCollapse.current.style.height = state ? "auto" : "";
    };
  };

  const handleOutlineClick = (e) => {
    const isOutside = !accordion.current.contains(e.target);
    if (isOutside) {
      setState(false);
    }
  };
  useEffect(() => {
    if (state) {
      requestAnimationFrame(() => {
        document.addEventListener("click", handleOutlineClick);
      });
    } else {
      document.removeEventListener("click", handleOutlineClick);
    }
    return () => {
      document.removeEventListener("click", handleOutlineClick);
    };
  }, [state]);
  useEffect(handleChangeState, [state]);
  return (
    <div
      ref={accordion}
      className="accordion w-100 d-flex flex-column bg-white"
    >
      <button
        onClick={() => setState((p) => !p)}
        className="accordion-toggler position-relative d-flex align-items-center justify-content-between p-2 border-0 shadow-none"
      >
        <span>{title}</span>
        <i className="bi bi-chevron-down text-white transition" />
      </button>
      <div ref={accordionCollapse} className="accordion-collapse">
        <div ref={accordionBody} className="accordion-body p-2">
          {children}
        </div>
      </div>
    </div>
  );
}
