import React, { useState } from 'react';
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';
import { Stepper } from '@cestyle/core';

const code = `
import { useState } from 'react';
import { Stepper } from '@cestyle/core';
import { UserCheck, MailOpened, ShieldCheck } from 'tabler-icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheck size={18} />} />
      <Stepper.Step icon={<MailOpened size={18} />} />
      <Stepper.Step icon={<ShieldCheck size={18} />} />
    </Stepper>
  );
}
`;

function Demo() {
  const [active, setActive] = useState(0);
  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheck size={18} />} />
      <Stepper.Step icon={<MailOpened size={18} />} />
      <Stepper.Step icon={<ShieldCheck size={18} />} />
    </Stepper>
  );
}

export const iconsOnly: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
