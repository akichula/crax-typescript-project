
type TRules = {
  required: boolean;
  message: string
}

const rules = {
  required: (message: string = "It's required field!"): TRules => ({
    required: true,
    message
  })
};

export { rules };
