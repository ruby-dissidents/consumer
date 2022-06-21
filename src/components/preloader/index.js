import { Fragment, useEffect, useState } from "react"
import { getContent } from "../../constants"

export const Preloader = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getContent(setIsLoading)
  }, [])

  return isLoading ? (
    children
  ) : (
    <svg
      style={{ display: "block", margin: "auto" }}
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <rect x="15" y="30" width="10" height="40" fill="#ffb6bb">
        <animate
          attributeName="opacity"
          dur="2.380952380952381s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-1.4285714285714284"
        ></animate>
      </rect>
      <rect x="35" y="30" width="10" height="40" fill="#ffe691">
        <animate
          attributeName="opacity"
          dur="2.380952380952381s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-0.9523809523809523"
        ></animate>
      </rect>
      <rect x="55" y="30" width="10" height="40" fill="#95d5ee">
        <animate
          attributeName="opacity"
          dur="2.380952380952381s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-0.47619047619047616"
        ></animate>
      </rect>
      <rect x="75" y="30" width="10" height="40" fill="#585872">
        <animate
          attributeName="opacity"
          dur="2.380952380952381s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          values="1;0.2;1"
          begin="-2.380952380952381"
        ></animate>
      </rect>
    </svg>
  )
}
