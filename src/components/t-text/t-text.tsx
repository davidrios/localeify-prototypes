import { Component, h } from '@stencil/core';

@Component({
  tag: 't-text'
})
export class TranslatedText {
  render() {
    return <span><slot /></span>;
  }
}
