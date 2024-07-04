import { CustomElementHelper } from "./custom-element-helper";

describe('CustomElementHelper', () => {

  it('should define custom elements', () => {
    CustomElementHelper.registerCustomElementsFunc = jasmine.createSpy();
    CustomElementHelper.registerCustomElements.define = jasmine.createSpy();
    //@ts-ignore
    CustomElementHelper.defineCustomElements(null);
    expect(customElements).toBeTruthy();
  });
});