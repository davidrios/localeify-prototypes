/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TText {}
}

declare global {


  interface HTMLTTextElement extends Components.TText, HTMLStencilElement {}
  var HTMLTTextElement: {
    prototype: HTMLTTextElement;
    new (): HTMLTTextElement;
  };
  interface HTMLElementTagNameMap {
    't-text': HTMLTTextElement;
  }
}

declare namespace LocalJSX {
  interface TText {}

  interface IntrinsicElements {
    't-text': TText;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      't-text': LocalJSX.TText & JSXBase.HTMLAttributes<HTMLTTextElement>;
    }
  }
}


