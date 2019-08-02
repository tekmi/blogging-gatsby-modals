import React from 'react';

import SEO from '../components/seo';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { useSingleModal } from '../contexts/SingleModalContext';
import ButtonGroup from 'reactstrap/es/ButtonGroup';
import { Link } from 'gatsby';

const IndexPage = () => {
  const { toggle, close, setContent } = useSingleModal();

  const toggleModalWithContent = (cont) => {
    setContent(cont);
    toggle();
  };

  return (
    <>
      <SEO title="Home" />
      <ButtonGroup>
        <Button color="info" onClick={() => toggleModalWithContent(() => 'adam')}>
          Open Modal
        </Button>
        <Button color="warning" onClick={() => toggleModalWithContent(() => 11)}>
          Open Number Modal
        </Button>
        <Button color="success" onClick={() => toggleModalWithContent(() => [11, 22, 33])}>
          Open Array Modal
        </Button>
        <Button
          color="danger"
          onClick={() =>
            toggleModalWithContent(() => {
              return (
                <>
                  <ModalHeader>Modal title</ModalHeader>
                  <ModalBody>Another Test</ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={() => close()}>
                      Do Something
                    </Button>{' '}
                    <Button color="secondary" onClick={() => close()}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </>
              );
            })
          }
        >
          Open JSX Modal
        </Button>
      </ButtonGroup>
      <br />
      <Link to="/page-2">Go To Second page</Link>
    </>
  );
};

export default IndexPage;
