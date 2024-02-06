import React, { useEffect, useState } from "react";
import "./zoomer.scss";

type PropsType = {
  zoomId: string;
  imgSrc: string;
  imgAlt?: string;
  imgTitle?: string;
}

type StateType = {
  scale: number;
  offsetX: number;
  offsetY: number;
  zoomed: boolean;
  transitioning: boolean;
}

/**
 * @property {HTMLElement} overlay
 * @description HTML Element to add the overlay to the page
 */
let overlay: HTMLElement = null;

const TIMEOUT_TIMER = 280;

function ZoomerImage({ zoomId, imgAlt, imgTitle, imgSrc }: PropsType) {
  const initialState: StateType = {
    scale: 1,
    offsetX: 0,
    offsetY: 0,
    zoomed: false,
    transitioning: false,
  };

  const [state, setState] = useState<StateType>(initialState);

  useEffect(() => {
    if (!document.querySelector(".zoomer__backdrop--hidden")) {
      overlay = document.createElement("div");
      overlay.className = "zoomer__backdrop--hidden";
      document.body.appendChild(overlay);
    } else {
      overlay = document.querySelector(".zoomer__backdrop--hidden");
    }
  }, []);

  useEffect(() => {
    overlay.className = `${state.zoomed ? "zoomer__backdrop" : "zoomer__backdrop--hidden"}`;
  });

  /**
   * @function getOffsets
   * @description Function for getting the image coordinates for the animation
   */
  const getOffsets = (): any => {
    const halfScreenX: number = window.innerWidth / 2;
    const halfScreenY: number = window.innerHeight / 2;
    const $el: HTMLElement = document.querySelector(
      `#zoomer-${zoomId} .zoomer__img`
    );
    const offsetX: number =
      halfScreenX - $el.getBoundingClientRect().left - $el.clientWidth / 2;
    const offsetY: number =
      halfScreenY - $el.getBoundingClientRect().top - $el.clientHeight / 2;

    const heightRatio: number = window.innerHeight / $el.clientHeight;
    const widthRatio: number = window.innerWidth / $el.clientWidth;
    const scale: number = (heightRatio > widthRatio ? widthRatio : heightRatio) * 0.8;

    return {
      offsetX,
      offsetY,
      scale
    };
  };

  /**
   * @function zoom
   * @description Function for the zoom effect
   */
  const zoom = (): void => {
    const { offsetX, offsetY, scale } = getOffsets();

    setState(prevState => {
      return {
        scale: !prevState.zoomed ? scale : 1,
        zoomed: !prevState.zoomed,
        offsetX: !prevState.zoomed ? offsetX : 0,
        transitioning: true,
        offsetY: !prevState.zoomed ? offsetY : 0
      };
    });

    if (state.zoomed) {
      setTimeout(() => {
        setState((prevState) => {
          return {
            ...prevState,
            zoomed: false,
          }
        });
      }, TIMEOUT_TIMER);
    }

    setTimeout(() => {
      setState((prevState) => {
        return {
          ...prevState,
          transitioning: false,
        }
      });
    }, TIMEOUT_TIMER);
  };

  return (
    <div className="zoomer" id={`zoomer-${zoomId}`}>
      <div
        style={{
          zIndex: state.transitioning ? 200 : null,
          pointerEvents: state.transitioning ? 'none' : 'auto',
          transform: `translate(${state.offsetX}px, ${state.zoomed ? state.offsetY + "px" : "0"})`
        }}
        className={`zoomer__img ${state.zoomed ? "zoomer__img--zoomed" : ""}`}
      >
        <img
          src={imgSrc}
          alt={imgAlt ? imgAlt : null}
          title={imgTitle ? imgTitle : null}
          style={{
            transform: state.zoomed ? `scale(${state.scale})` : null
          }}
          onClick={zoom}
        />
      </div>
    </div>
  );
}

export default ZoomerImage;