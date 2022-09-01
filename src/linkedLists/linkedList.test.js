import assert from 'assert'
import { describe, it } from 'mocha'
import { Node } from './node.js'
import { LinkedList } from './linkedList.js'

describe('Linked list test suite', () => {
    it('#constructor -> should initialize without a head by default', () => {
        const linkedList = new LinkedList()

        assert.deepStrictEqual(null, linkedList.head)
    })

    it('#addToStart -> should insert nodes in the beggining of the list', () => {
        const firstNode = new Node(1)
        const secondNode = new Node(2)

        const linkedList = new LinkedList()

        linkedList.addToStart(secondNode)
        linkedList.addToStart(firstNode)

        assert.deepStrictEqual(linkedList.head, firstNode)        
        assert.deepStrictEqual(linkedList.head.next, secondNode)        
    })
    
    it('#addToEnd -> should insert nodes in the end of the list', () => {
        const firstNode = new Node(1)        
        const secondNode = new Node(2)
        
        const linkedList = new LinkedList()

        linkedList.addToEnd(firstNode)
        linkedList.addToEnd(secondNode)

        assert.deepStrictEqual(linkedList.getTail(), secondNode)
    })
    
    it('#addToIndex -> should insert a node in a given position in the list', () => {
        const firstNode = new Node(0)
        const secondNode = new Node(1)
        const thirdNode = new Node(2)
        const fourthNode = new Node(3)
        
        const linkedList = new LinkedList(firstNode)

        linkedList.addToEnd(secondNode)
        linkedList.addToEnd(fourthNode)
        linkedList.addToIndex(2, thirdNode)

        assert.deepStrictEqual(linkedList.head.next.next, thirdNode)
        assert.deepStrictEqual(linkedList.getTail(), fourthNode)
    })

    it('#addToIndex -> should insert a node in the beggining of the list if index is 0', () => {
        const firstNode = new Node(0)
        const secondNode = new Node(1)
        const thirdNode = new Node(2)
        
        const linkedList = new LinkedList(secondNode)

        linkedList.addToEnd(thirdNode)
        linkedList.addToIndex(0, firstNode)

        assert.deepStrictEqual(linkedList.head, firstNode)
        assert.deepStrictEqual(linkedList.head.next, secondNode)
    })

    it('#addToIndex -> should insert a node in the end of the list if index is the last position', () => {
        const firstNode = new Node(0)
        const secondNode = new Node(1)
        
        const linkedList = new LinkedList(firstNode)

        linkedList.addToIndex(1, secondNode)

        assert.deepStrictEqual(linkedList.getTail(), secondNode)
    })

    it('#deleteFromStart -> should delete a node from the beggining of the list', () => {
        const firstNode = new Node(1)
        const secondNode = new Node(2)        
        const thirdNode = new Node(3)

        const linkedList = new LinkedList(firstNode)

        linkedList.addToEnd(secondNode)
        linkedList.addToEnd(thirdNode)

        linkedList.deleteFromStart()
        linkedList.deleteFromStart()

        assert.deepStrictEqual(linkedList.head, thirdNode)
    })

    it('#deleteFromStart -> should not throw if list is empty', () => {
        const linkedList = new LinkedList()

        linkedList.deleteFromStart()

        assert.deepStrictEqual(linkedList.head, null)
    })

    it('#deleteFromStart -> should empty the list if it only has one item', () => {
        const firstNode = new Node(1)

        const linkedList = new LinkedList(firstNode)

        linkedList.deleteFromStart()

        assert.deepStrictEqual(linkedList.head, null)
        assert.deepStrictEqual(linkedList.tail, null)
        assert.deepStrictEqual(linkedList.length, 0)
    })

    it('#deleteFromEnd -> should delete a node from the end of the list', () => {
        const firstNode = new Node(1)
        const secondNode = new Node(2)        
        const thirdNode = new Node(3)

        const linkedList = new LinkedList(firstNode)

        linkedList.addToEnd(secondNode)
        linkedList.addToEnd(thirdNode)

        linkedList.deleteFromEnd()
        linkedList.deleteFromEnd()

        assert.deepStrictEqual(linkedList.head.next, null)
    })

    it('#deleteFromIndex -> should delete a node from a given position on the list', () => {
        const firstNode = new Node(0)
        const secondNode = new Node(1)
        const thirdNode = new Node(2)

        const linkedList = new LinkedList(firstNode)

        linkedList.addToEnd(secondNode)
        linkedList.addToEnd(thirdNode)

        linkedList.deleteFromIndex(1)

        assert.deepStrictEqual(linkedList.head.next, thirdNode)
    })    

    it('#deleteFromIndex -> should delete a node from the end if index is the last position', () => {
        const firstNode = new Node(0)
        const secondNode = new Node(1)
        const thirdNode = new Node(2)

        const linkedList = new LinkedList(firstNode)

        linkedList.addToEnd(secondNode)
        linkedList.addToEnd(thirdNode)

        linkedList.deleteFromIndex(2)

        assert.deepStrictEqual(linkedList.getTail(), secondNode)
    })    

    it('#deleteFromIndex -> should delete a node the head if index is the first position', () => {
        const firstNode = new Node(0)
        const secondNode = new Node(1)
        const thirdNode = new Node(2)

        const linkedList = new LinkedList(firstNode)

        linkedList.addToEnd(secondNode)
        linkedList.addToEnd(thirdNode)

        linkedList.deleteFromIndex(0)

        assert.deepStrictEqual(linkedList.head, secondNode)
    })  
})