const URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRr5SNt9JwPscmTuxoFgzQh_bcudtbSiWo7pSAqRFFVgjS66o0-ovrMlp_XctReIiYZQoBeGuX-YKW0/pub?output=tsv';

export const api = {
  list: async () => {
    const res = await fetch(URL);
    const datos = await res.text();
    return datos
      .split('\n')
      .slice(1)
      .map((dat) => {
        const [fecha, idea, description] = dat.split('\t');
        return {
          fecha,
          idea,
          description: description.split('\r').shift(),
        };
      });
  },
};
