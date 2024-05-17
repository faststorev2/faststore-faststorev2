const extraDataResolver = {
  Query: {
    extraData: (): { data: string } => {
      return {
        data: 'Extra data',
      };
    },
    namedExtraData: (_: any, { name }: { name: string }): { data: string } => {
      return {
        data: `Named extra data: ${name}`,
      };
    },
  },
};

export default extraDataResolver;
