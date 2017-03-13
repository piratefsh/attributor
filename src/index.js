// Takes in a block selector and a callback that takes in a  DOM elem and returns a desired text for the label
class Attributor {
  constructor(blockSelector, labelGetterFn) {
    const blockElems = document.querySelectorAll(blockSelector);
  
    // make elems into proper AttributorElem objects
    this.elems = Array.prototype.map.call(blockElems, (el) => {
      return new AttributorElem(el);
    });

    this.labeller = labelGetterFn;
    this.init();
  }

  init() {
    this.elems.forEach((el) => {
      // add label and put in unfocused state
      el.addLabel(this.labeller(el.getDOMElem()));
      el.unfocus();
      
        // focus element and it's parents when mouse over
        // and unfocus others
      el.setMouseOverHandler((ev) => {
        //  hide others if haven't already on this call chain
        if (!ev.cleared) {
          this.elems.forEach((other) => {
            other.unfocus();
          });
        }
        ev.cleared = true;
        el.focus();
      });

      // unfocus all when element is not being mosueovered anymore
      el.setMouseOutHandler((ev) => {
        this.elems.forEach((other) => {
          other.unfocus();
        });
      });
    });
  }

}

class AttributorElem {
  constructor(elem) {
    this.elem = elem;
  }

  setMouseOverHandler(handler) {
    this.elem.addEventListener('mouseover', handler);
  }

  setMouseOutHandler(handler) {
    this.elem.addEventListener('mouseout', handler);
  }

  addLabel(labelText) {
    this.label = this.makeLabel(labelText);
    this.elem.appendChild(this.label);
  }

  makeLabel(labelText) {
    const label = document.createElement('span');
    label.classList.add('debug-label');
    label.style.backgroundColor = '#F44336';
    label.style.color = 'white';
    label.style.padding = '4px';
    label.style.fontSize = '14px';
    label.style.fontFamily = 'monospace';
    label.style.textTransform = 'none';
    label.style.position = 'absolute';
    label.style.zIndex = '9998';

    label.innerHTML = labelText;
    return label;
  }

  focus() {
    if (this.label) {
      this.label.style.opacity = 1;
    }
    this.elem.style.boxShadow = '0px 0px 0px 3px rgba(244,67,44,0.9)';
  }

  unfocus() {
    if (this.label) {
      this.label.style.opacity = 0.2;
    }

    this.elem.style.boxShadow = '0px 0px 0px 2px rgba(244,67,44,0.5)';
  }

  getDOMElem() {
    return this.elem;
  }
}

module.exports = Attributor