import { ReplaySubject } from "rxjs";
import { AppProps } from "single-spa";

export const singleSpaPropsSubject = new ReplaySubject<SingleSpaProps>(1);
type NewType = {};
//Add any custom single-spa props to this type.
export type SingleSpaProps = AppProps & NewType;
