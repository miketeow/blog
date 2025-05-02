import React from "react";

import CopyButton from "./copy-button";
import { StyledCode } from "./styled-code";
import { StyledPre } from "./styled-pre";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface ScriptCopyProps {
  scripts: { packageName: string; script: string }[];
}

const ScriptCopy = (src: ScriptCopyProps) => {
  if (src.scripts.length == 0) {
    return null;
  }
  return (
    <Tabs defaultValue={src.scripts[0].packageName}>
      <TabsList>
        {src.scripts.map(({ packageName }) => (
          <TabsTrigger key={packageName} value={packageName}>
            {packageName}
          </TabsTrigger>
        ))}
      </TabsList>
      {src.scripts.map(({ packageName, script }) => (
        <TabsContent
          key={packageName}
          value={packageName}
          className="group relative mt-2"
        >
          <StyledPre>
            <StyledCode>{script}</StyledCode>
          </StyledPre>
          <CopyButton src={script} className="absolute top-3 right-3" />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ScriptCopy;
