import { Listbox as HListbox, Transition } from '@headlessui/react';
import { cx } from 'classix';
import { Fragment, useMemo } from 'react';

import styles from './Listbox.module.scss';

interface IListboxItem {
  value: string;
  name: string;
}

interface IListboxProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: IListboxItem[];
  disabled?: boolean;
}

type ActiveOptionType = IListboxItem | undefined;

export const Listbox = (props: IListboxProps) => {
  const { value, onChange, options, label, disabled } = props;
  const activeOption: ActiveOptionType = useMemo(
    () => options.find((option) => option.value === value),
    [options, value],
  );

  return (
    <HListbox value={value} onChange={onChange} disabled={disabled}>
      <div className={styles.field}>
        {label && <HListbox.Label className={styles.label}>{label}</HListbox.Label>}
        <HListbox.Button className={({ open }) => cx(styles.button, open && styles.buttonActive)}>
          {activeOption?.name}
        </HListbox.Button>
        <Transition
          as={Fragment}
          enter={styles.enter}
          enterFrom={styles.enterFrom}
          enterTo={styles.enterTo}
          leave={styles.leave}
          leaveFrom={styles.leaveFrom}
          leaveTo={styles.leaveTo}
        >
          <HListbox.Options className={styles.options}>
            {options.map((option) => {
              const { value, name } = option;

              return (
                <HListbox.Option
                  key={value}
                  value={value}
                  className={({ active }) => cx(styles.option, active && styles.optionActive)}
                >
                  {name}
                </HListbox.Option>
              );
            })}
          </HListbox.Options>
        </Transition>
      </div>
    </HListbox>
  );
};
