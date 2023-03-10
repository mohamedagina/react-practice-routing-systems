import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'dsaas',
      label: 'Do you like React js ?',
      content:
        'Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. '
    },
    {
      id: 'dfsds',
      label: 'Do you like Javascript ?',
      content:
        'Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. '
    },
    {
      id: 'hfdfvs',
      label: 'Do you like HTML ?',
      content:
        'Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. Yes, you can use it to create awesome web apps. '
    }
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
