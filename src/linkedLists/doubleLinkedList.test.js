import assert from 'assert'
import { describe, it } from 'mocha'
import { DoubleLinkedNode } from './node.js'
import { DoubleLinkedList } from './doubleLinkedList.js'

describe('Double Linked list test suite', () => {
    it('#constructor -> should initialize without a head by default', () => {
        const doubleLinkedList = new DoubleLinkedList()

        assert.deepStrictEqual(doubleLinkedList.length, 0)
        assert.deepStrictEqual(doubleLinkedList.head, null)
    })

    it('#addToStart -> should insert nodes in the beggining of the list', () => {
        const firstNode = new DoubleLinkedNode(1)
        const secondNode = new DoubleLinkedNode(2)

        const doubleLinkedList = new DoubleLinkedList()

        doubleLinkedList.addToStart(secondNode)
        doubleLinkedList.addToStart(firstNode)

        assert.deepStrictEqual(doubleLinkedList.length, 2)
        assert.deepStrictEqual(doubleLinkedList.head.previous, null)
        assert.deepStrictEqual(doubleLinkedList.head.next.previous, doubleLinkedList.head)
    })
    
    it('#addToEnd -> should insert nodes in the end of the list', () => {
        const firstNode = new DoubleLinkedNode(1)        
        const secondNode = new DoubleLinkedNode(2)
        
        const doubleLinkedList = new DoubleLinkedList()

        doubleLinkedList.addToEnd(firstNode)
        doubleLinkedList.addToEnd(secondNode)

        assert.deepStrictEqual(doubleLinkedList.length, 2)
        assert.deepStrictEqual(doubleLinkedList.head.previous, null)
        assert.deepStrictEqual(doubleLinkedList.getTail(), secondNode)
        assert.deepStrictEqual(doubleLinkedList.getTail().previous, firstNode)
    })
    
    it('#addToIndex -> should insert a node in a given position in the list', () => {
        const firstNode = new DoubleLinkedNode(0)
        const secondNode = new DoubleLinkedNode(1)
        const thirdNode = new DoubleLinkedNode(2)
        const fourthNode = new DoubleLinkedNode(3)
        
        const doubleLinkedList = new DoubleLinkedList(firstNode)

        doubleLinkedList.addToEnd(secondNode)
        doubleLinkedList.addToEnd(fourthNode)
        doubleLinkedList.addToIndex(2, thirdNode)

        assert.deepStrictEqual(doubleLinkedList.length, 4)
        assert.deepStrictEqual(doubleLinkedList.getTail(), fourthNode)
        assert.deepStrictEqual(doubleLinkedList.getTail().previous, thirdNode)
        assert.deepStrictEqual(doubleLinkedList.getTail().previous.previous, secondNode)
    })

    it('#addToIndex -> should insert a node in the beggining of the list if index is 0', () => {
        const firstNode = new DoubleLinkedNode(0)
        const secondNode = new DoubleLinkedNode(1)
        const thirdNode = new DoubleLinkedNode(2)
        
        const doubleLinkedList = new DoubleLinkedList(secondNode)

        doubleLinkedList.addToEnd(thirdNode)
        doubleLinkedList.addToIndex(0, firstNode)

        assert.deepStrictEqual(doubleLinkedList.length, 3)
        assert.deepStrictEqual(doubleLinkedList.head, firstNode)
        assert.deepStrictEqual(doubleLinkedList.head.next, secondNode)
    })

    it('#addToIndex -> should insert a node in the end of the list if index is the last position', () => {
        const firstNode = new DoubleLinkedNode(0)
        const secondNode = new DoubleLinkedNode(1)
        
        const doubleLinkedList = new DoubleLinkedList(firstNode)

        doubleLinkedList.addToIndex(1, secondNode)

        assert.deepStrictEqual(doubleLinkedList.length, 2)
        assert.deepStrictEqual(doubleLinkedList.getTail(), secondNode)
    })

    it('#deleteFromStart -> should delete a node from the beggining of the list', () => {
        const firstNode = new DoubleLinkedNode(1)
        const secondNode = new DoubleLinkedNode(2)        
        const thirdNode = new DoubleLinkedNode(3)

        const doubleLinkedList = new DoubleLinkedList(firstNode)

        doubleLinkedList.addToEnd(secondNode)
        doubleLinkedList.addToEnd(thirdNode)

        doubleLinkedList.deleteFromStart()
        doubleLinkedList.deleteFromStart()

        assert.deepStrictEqual(doubleLinkedList.length, 1)
        assert.deepStrictEqual(doubleLinkedList.head, thirdNode)
        assert.deepStrictEqual(doubleLinkedList.head.previous, null);
    })

    it('#deleteFromStart -> should not throw if list is empty', () => {
        const doubleLinkedList = new DoubleLinkedList()

        doubleLinkedList.deleteFromStart()

        assert.deepStrictEqual(doubleLinkedList.length, 0)
        assert.deepStrictEqual(doubleLinkedList.head, null)
    })

    it('#deleteFromStart -> should empty the list if it only has one item', () => {
        const firstNode = new DoubleLinkedNode(1)

        const doubleLinkedList = new DoubleLinkedList(firstNode)

        doubleLinkedList.deleteFromStart()

        assert.deepStrictEqual(doubleLinkedList.length, 0)
        assert.deepStrictEqual(doubleLinkedList.head, null)
        assert.deepStrictEqual(doubleLinkedList.tail, null)
    })

    it('#deleteFromEnd -> should delete a node from the end of the list', () => {
        const firstNode = new DoubleLinkedNode(1)
        const secondNode = new DoubleLinkedNode(2)        
        const thirdNode = new DoubleLinkedNode(3)

        const doubleLinkedList = new DoubleLinkedList(firstNode)

        doubleLinkedList.addToEnd(secondNode)
        doubleLinkedList.addToEnd(thirdNode)

        doubleLinkedList.deleteFromEnd()
        doubleLinkedList.deleteFromEnd()

        assert.deepStrictEqual(doubleLinkedList.length, 1)
        assert.deepStrictEqual(doubleLinkedList.head.next, null)
    })

    it('#deleteFromIndex -> should delete a node from a given position on the list', () => {
        const firstNode = new DoubleLinkedNode(0)
        const secondNode = new DoubleLinkedNode(1)
        const thirdNode = new DoubleLinkedNode(2)
        const fourthNode = new DoubleLinkedNode(3)

        const doubleLinkedList = new DoubleLinkedList(firstNode)

        doubleLinkedList.addToEnd(secondNode)
        doubleLinkedList.addToEnd(thirdNode)
        doubleLinkedList.addToEnd(fourthNode)

        doubleLinkedList.deleteFromIndex(2)

        assert.deepStrictEqual(doubleLinkedList.length, 3)
        assert.deepStrictEqual(doubleLinkedList.getTail().previous, secondNode)
    })    

    it('#deleteFromIndex -> should delete a node from the end if index is the last position', () => {
        const firstNode = new DoubleLinkedNode(0)
        const secondNode = new DoubleLinkedNode(1)
        const thirdNode = new DoubleLinkedNode(2)

        const doubleLinkedList = new DoubleLinkedList(firstNode)

        doubleLinkedList.addToEnd(secondNode)
        doubleLinkedList.addToEnd(thirdNode)

        doubleLinkedList.deleteFromIndex(2)

        assert.deepStrictEqual(doubleLinkedList.length, 2)
        assert.deepStrictEqual(doubleLinkedList.getTail().next, null)
        assert.deepStrictEqual(doubleLinkedList.getTail(), secondNode)
    })    

    it('#deleteFromIndex -> should delete a node the head if index is the first position', () => {
        const firstNode = new DoubleLinkedNode(0)
        const secondNode = new DoubleLinkedNode(1)
        const thirdNode = new DoubleLinkedNode(2)

        const doubleLinkedList = new DoubleLinkedList(firstNode)

        doubleLinkedList.addToEnd(secondNode)
        doubleLinkedList.addToEnd(thirdNode)

        doubleLinkedList.deleteFromIndex(0)

        assert.deepStrictEqual(doubleLinkedList.length, 2)
        assert.deepStrictEqual(doubleLinkedList.head, secondNode)
        assert.deepStrictEqual(doubleLinkedList.head.previous, null)
        assert.deepStrictEqual(doubleLinkedList.head.next, thirdNode)
    })  
})