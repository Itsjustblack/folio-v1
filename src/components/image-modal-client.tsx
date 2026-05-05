"use client";

import dynamic from "next/dynamic";

const ImageModal = dynamic(() => import("./image-modal"), { ssr: false });

export default ImageModal;
