import assert from 'assert';
import { describe, it } from 'mocha';
import { Queue } from './queue.js';

describe('Queue test suite', () => {
    it('#length -> should return the amount of items on the queue', () => {
        const queue = new Queue();

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        assert.deepStrictEqual(queue.length, 3)
        
        queue.dequeue()
        queue.dequeue()

        assert.deepStrictEqual(queue.length, 1)
    })

    it('#enqueue -> should add a item to the end of the queue', () => {
        const queue = new Queue();

        queue.enqueue(1)
        queue.enqueue(2)

        assert.deepStrictEqual(queue.length, 2)
        assert.deepStrictEqual(queue.dequeue(), 1)
    })

    it('#dequeue -> should remove the first item of the queue', () => {
        const queue = new Queue();

        queue.enqueue(1)
        queue.enqueue(2)

        const firstItem = queue.dequeue()
        const secondItem = queue.dequeue()

        assert.deepStrictEqual(firstItem, 1)
        assert.deepStrictEqual(secondItem, 2)
    })

    it('#peek -> should return the first item of the queue without deleting it', () => {
        const queue = new Queue();

        queue.enqueue(1)
        queue.enqueue(2)

        const firstItem = queue.peek()

        assert.deepStrictEqual(firstItem, 1)
        assert.deepStrictEqual(queue.dequeue(), firstItem)
    })

    it('#peek -> should return the last item of the queue if argument is -1', () => {
        const queue = new Queue();

        queue.enqueue(1)
        queue.enqueue(2)

        const secondItem = queue.peek(-1)

        queue.dequeue()

        assert.deepStrictEqual(secondItem, 2)
        assert.deepStrictEqual(queue.dequeue(), secondItem)
    })    

    it('#clear -> should clear the queue', () => {
        const queue = new Queue();

        queue.enqueue(1)
        queue.enqueue(2)

        queue.clear()

        assert.deepStrictEqual(queue.length, 0)
    })
});
