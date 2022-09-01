import { describe, it } from 'mocha';
import assert from 'assert';
import { Node } from './node.js';
import { LinkedListInterface } from './linkedListInterface.js';
import { NotImplementedError } from '../utils/notImplementedError.js';

describe('LinkedListInterface test suite', () => {
  it('#isEmpty -> should verify if the list is empty', () => {
    const firstNode = new Node(1);

    const linkedList = new LinkedListInterface(firstNode);

    assert.deepEqual(false, linkedList.isEmpty());
  });

  it('#isEmpty -> should verify if the list is empty', () => {
    const linkedList = new LinkedListInterface();

    assert.deepEqual(true, linkedList.isEmpty());
  });

  it('#getTail -> should get the tail of the list', () => {
    const firstNode = new Node(1);

    const linkedList = new LinkedListInterface(firstNode);

    assert.deepStrictEqual(linkedList.getTail(), firstNode);
  });

  it('#clear -> should empty the list', () => {
    const linkedList = new LinkedListInterface(new Node(1))

    linkedList.clear()

    assert.deepEqual(true, linkedList.isEmpty())
})

  it('#addToStart -> should throw if method is not implemented', () => {
    assert.throws(
      () => new LinkedListInterface().addToStart(),
      NotImplementedError
    );
  });

  it('#addToEnd -> should throw if method is not implemented', () => {
    assert.throws(
      () => new LinkedListInterface().addToEnd(),
      NotImplementedError
    );
  });

  it('#addToIndex -> should throw if method is not implemented', () => {
    assert.throws(
      () => new LinkedListInterface().addToIndex(),
      NotImplementedError
    );
  });

  it('#deleteFromStart -> should throw if method is not implemented', () => {
    assert.throws(
      () => new LinkedListInterface().deleteFromStart(),
      NotImplementedError
    );
  });

  it('#deleteFromEnd -> should throw if method is not implemented', () => {
    assert.throws(
      () => new LinkedListInterface().deleteFromEnd(),
      NotImplementedError
    );
  });

  it('#deleteFromIndex -> should throw if method is not implemented', () => {
    assert.throws(
      () => new LinkedListInterface().deleteFromIndex(),
      NotImplementedError
    );
  });
});
