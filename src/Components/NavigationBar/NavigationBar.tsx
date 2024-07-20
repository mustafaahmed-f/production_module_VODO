import React from "react";
import { NavigationTrail } from "vodo-react-components";

interface NavigationBarProps {
  trialPage: string;
  trailLink: { label: string; href: string }[];
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  trialPage,
  trailLink,
}) => {
  return (
    <div className="navigationBar">
      <NavigationTrail trailPage={trialPage} trailLink={trailLink} />
    </div>
  );
};

export default NavigationBar;
