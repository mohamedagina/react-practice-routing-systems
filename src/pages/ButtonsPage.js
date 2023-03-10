import Button from '../components/Button';

function ButtonsPage() {
  return (
    <div>
      <Button primary>Primary Button</Button>
      <Button secondary>Secondary Button</Button>
      <Button success>Success Button</Button>
      <Button warning>Warning Button</Button>
      <Button danger>Danger Button</Button>

      <Button primary outline>
        Primary outline Button
      </Button>
      <Button secondary outline>
        Secondary outline Button
      </Button>
      <Button success outline>
        Success outline Button
      </Button>
      <Button warning outline>
        Warning outline Button
      </Button>
      <Button danger outline>
        Danger outline Button
      </Button>

      <Button primary rounded>
        Primary rounded Button
      </Button>
      <Button secondary rounded>
        Secondary rounded Button
      </Button>
      <Button success rounded>
        Success rounded Button
      </Button>
      <Button warning rounded>
        Warning rounded Button
      </Button>
      <Button danger rounded>
        Danger rounded Button
      </Button>
    </div>
  );
}

export default ButtonsPage;
