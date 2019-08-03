import { Modal } from 'reactstrap';

class SingleModal extends Modal {
  constructor(props) {
    super(props);

    this._element = document.getElementById('single-modal');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
  }

  componentWillUnmount() {
    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.manageFocusAfterClose();
      if (this.state.isOpen) {
        this.close();
      }
    }

    this._isMounted = false;
  }
}

export { SingleModal };
