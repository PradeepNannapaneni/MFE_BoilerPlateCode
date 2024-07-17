import { CustomElementHelper } from "./custom-element-helper";

describe('CustomElementHelper', () => {

  it('should define custom elements', () => {
    CustomElementHelper.createCustomElementFunc = jasmine.createSpy();
    CustomElementHelper.customElementRegistry.define = jasmine.createSpy();
    //@ts-ignore
    CustomElementHelper.defineCustomElements(null);
    expect(customElements).toBeTruthy();
  });
});