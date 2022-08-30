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

        assert.deepStrictEqual(firstNode, linkedList.head)        
    })

    it('#getTail -> should get the last node from the list', () => {
        const firstNode = new Node(1)
        const secondNode = new Node(2)        

        const linkedList = new LinkedList(firstNode)

        linkedList.addToEnd(secondNode)

        assert.deepStrictEqual(linkedList.getTail(), secondNode)
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
        
        const linkedList = new LinkedList(firstNode)

        linkedList.addToEnd(thirdNode)
        linkedList.addToIndex(1, secondNode)

        assert.deepStrictEqual(linkedList.head.next, secondNode)
        assert.deepStrictEqual(linkedList.getTail(), thirdNode)
    })
    
    it('#isEmpty -> should verify if the list is empty', () => {
        const firstNode = new Node(1)

        const linkedList = new LinkedList(firstNode)

        assert.deepEqual(false, linkedList.isEmpty())
    })
    
    it('#clear -> should empty the list', () => {
        const linkedList = new LinkedList(new Node(1))

        linkedList.clear()

        assert.deepEqual(true, linkedList.isEmpty())
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
})