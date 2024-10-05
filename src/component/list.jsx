export const List = ({ ideas }) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Fecha
            </th>
            <th scope='col' className='px-6 py-3'>
              Idea
            </th>
            <th scope='col' className='px-6 py-3'>
              Descripción
            </th>
          </tr>
        </thead>
        <tbody>
          {[...ideas].reverse().map(({ idea, fecha, description }, i) => (
            <tr
              key={i}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
            >
              <th scope='row' className='px-6 py'>
                {fecha}
              </th>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {idea}
              </td>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
