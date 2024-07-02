import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'assetUrl'
})
export class AssetUrlPipe implements PipeTransform {
    transform(value: string): string {
        return this.assetUrl(value);
    }

    assetUrl(url: string): string {
        //@ts-ignore
        const path = __webpack_public_path__;
        const pathSuffix = path.endsWith('/') ? '' : '/';
        const urlPrefix = url.startsWith('/') ? '' : '/';

        return `${path}${pathSuffix}${urlPrefix}${url}`
    }
}