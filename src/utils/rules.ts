
type TRules = {
  required: boolean;
  message: string
}

const rules = {
  required: (message: string): TRules => ({
    required: true,
    message
  })
};

export { rules };
