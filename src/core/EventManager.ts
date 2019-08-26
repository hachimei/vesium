import Cesium, { ScreenSpaceEventType, ScreenSpaceEventHandler } from "cesium";

import { pickedObjectEquals } from "./util";

export type EventType =
  | "onClick"
  | "onDoubleClick"
  | "onMouseDown"
  | "onMouseUp"
  | "onMiddleClick"
  | "onMiddleDown"
  | "onMiddleUp"
  | "onMouseMove"
  | "onPinchEnd"
  | "onPinchMove"
  | "onPinchStart"
  | "onRightClick"
  | "onRightDown"
  | "onRightUp"
  | "onWheel"
  | "onMouseEnter"
  | "onMouseLeave";

type EventMap<T> = { [key in EventType]: T };

export interface CesiumMovementEvent {
  position?: Cesium.Cartesian2;
  startPositon?: Cesium.Cartesian2;
  endPosition?: Cesium.Cartesian2;
}

export interface EventProps<T> {
  onClick?: (movement: CesiumMovementEvent, target: T) => void;
  onDoubleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseDown?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseUp?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleClick?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleDown?: (movement: CesiumMovementEvent, target: T) => void;
  onMiddleUp?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseMove?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchEnd?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchMove?: (movement: CesiumMovementEvent, target: T) => void;
  onPinchStart?: (movement: CesiumMovementEvent, target: T) => void;
  onRightClick?: (movement: CesiumMovementEvent, target: T) => void;
  onRightDown?: (movement: CesiumMovementEvent, target: T) => void;
  onRightUp?: (movement: CesiumMovementEvent, target: T) => void;
  onWheel?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseEnter?: (movement: CesiumMovementEvent, target: T) => void;
  onMouseLeave?: (movement: CesiumMovementEvent, target: T) => void;
}

export type Callback<T = any> = (e: CesiumMovementEvent, source: T) => void;

export const eventNames: EventType[] = [
  "onClick",
  "onDoubleClick",
  "onMouseDown",
  "onMouseUp",
  "onMiddleClick",
  "onMiddleDown",
  "onMiddleUp",
  "onMouseMove",
  "onPinchEnd",
  "onPinchMove",
  "onPinchStart",
  "onRightClick",
  "onRightDown",
  "onRightUp",
  "onWheel",
  "onMouseEnter",
  "onMouseLeave"
];

export default class EventManager {
  private static eventTypeMap: EventMap<ScreenSpaceEventType> = {
    onClick: ScreenSpaceEventType.LEFT_CLICK,
    onDoubleClick: ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
    onMouseDown: ScreenSpaceEventType.LEFT_DOWN,
    onMouseUp: ScreenSpaceEventType.LEFT_UP,
    onMiddleClick: ScreenSpaceEventType.MIDDLE_CLICK,
    onMiddleDown: ScreenSpaceEventType.MIDDLE_DOWN,
    onMiddleUp: ScreenSpaceEventType.MIDDLE_UP,
    onMouseMove: ScreenSpaceEventType.MOUSE_MOVE,
    onPinchEnd: ScreenSpaceEventType.PINCH_END,
    onPinchMove: ScreenSpaceEventType.PINCH_MOVE,
    onPinchStart: ScreenSpaceEventType.PINCH_START,
    onRightClick: ScreenSpaceEventType.RIGHT_CLICK,
    onRightDown: ScreenSpaceEventType.RIGHT_DOWN,
    onRightUp: ScreenSpaceEventType.RIGHT_UP,
    onWheel: ScreenSpaceEventType.WHEEL,
    onMouseEnter: ScreenSpaceEventType.MOUSE_MOVE,
    onMouseLeave: ScreenSpaceEventType.MOUSE_MOVE
  };
}
