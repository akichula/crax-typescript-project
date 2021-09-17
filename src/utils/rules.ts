import moment, {Moment} from "moment";


type TRules = {
  required: boolean;
  message: string
}

const rules = {
  required: (message: string = "It's required field!"): TRules => ({
    required: true,
    message
  }),
  isDateAfter: (message: string) => () => ({
    validator(_: any, value: Moment) {
      if (value.isSameOrAfter(moment())){
        return Promise.resolve();
      }
      return Promise.reject(new Error(message));
    }
  })
};

export { rules };
