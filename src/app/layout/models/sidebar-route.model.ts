export class SidebarRouteModel {
    path: string;
    label: string;
    isAbsoluteUrl?: boolean;
    isGroup?: boolean;
    child?: SidebarRoutesModel;
}
export type SidebarRoutesModel = SidebarRouteModel[];
