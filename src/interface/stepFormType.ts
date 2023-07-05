import { FormikHelpers } from 'formik';

export interface StepperIProps {
  onSubmit: (
    values: EmailStepValuesType,
    formikHelpers: FormikHelpers<EmailStepValuesType>
  ) => void;
}

interface EmailStepValuesType {
  email: string;
}

export type OtpStepProps = {
  onSubmit: (
    values: OtpStepValuesType,
    formikHelpers: FormikHelpers<OtpStepValuesType>
  ) => void;
  onBack?: () => void;
};

type OtpStepValuesType = {
  digit0: string;
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
  digit5: string;
};
