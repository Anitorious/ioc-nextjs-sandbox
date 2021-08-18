import { useReducer } from "react";

type Enumerable = string | number;

export type MachineEvent = {
    type: Enumerable;
} & Record<string, any>;

export type MachineMap<State extends Enumerable, Event extends Enumerable> = { [P in State]?: { [Q in Event]: State } | null };

export type EffectMap<Event extends Enumerable> = { [P in Event]: (event: MachineEvent, state: Record<string, any>) => Record<string, any>; };

export type MachineGraph<State extends Enumerable> = {
    current: State;
    previous: State;
    state: Record<string, any>;
}

export function useStateMachine<State extends Enumerable, Event extends Enumerable>(
    stateMap: MachineMap<State, Event>,
    effectMap: EffectMap<Event>,
    initialMachineGraph: MachineGraph<State>
) {
  const transition = (machine: MachineGraph<State>, event: MachineEvent) => {
    const nextState = stateMap[machine.current][event.type] || machine.current;
    const blend = effectMap[event.type];

    return {
      current: nextState,
      previous: machine.current,
      state:
        (Boolean(blend) && { ...machine.state, ...blend(event, machine.state) }) ||
        machine.state,
    };
  };

  return useReducer(transition, initialMachineGraph);
}