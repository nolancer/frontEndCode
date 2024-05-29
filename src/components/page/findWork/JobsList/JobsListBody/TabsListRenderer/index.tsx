// TabsListRenderer.tsx
import { TabPanel } from "@mui/lab";
import { ReactNode } from "react";

interface TabsListRendererProps {
    children: ReactNode;
}

const TabsListRenderer = ({ children }: TabsListRendererProps) => {
    return <div>{children}</div>;
};
export default TabsListRenderer;