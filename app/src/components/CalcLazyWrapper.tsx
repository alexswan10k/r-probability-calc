import React, { useState, useEffect, Suspense } from "react";

const NestedLazy = React.lazy(() => import("./Calculator"))

export const TestComp = () => 
    <Suspense fallback={"loading..."}>
        <NestedLazy />
    </Suspense>