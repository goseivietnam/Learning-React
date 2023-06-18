import { PropsWithChildren, ReactNode } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import FixedBottomNavigation from "./FixedBottomNavigation";

export default function Layout(props: PropsWithChildren): ReactNode {
  const { children } = props;

  return (<>
    <ResponsiveAppBar></ResponsiveAppBar>
    {children}
    <FixedBottomNavigation></FixedBottomNavigation>
  </>
  )
}