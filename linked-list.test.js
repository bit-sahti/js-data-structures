import { describe, it } from 'node:test'
import assert from 'assert'
import { LinkedList } from './linked-list.js'

describe('Linked list test suite', () => {
    it('should initialize without a head by default', () => {
        const linkedList = new LinkedList()

        assert.deepStrictEqual(null, linkedList.head)
    })

    it.todo('should insert nodes in the beggining of the list')
    
    it.todo('should insert nodes in the end of the list')
    
    it.todo('should insert a node in a given position in the list')
    
    it.todo('should verify if the list is empty')
    
    it.todo('should empty the list')

    it.todo('should delete a node from the beggining of the list')

    it.todo('should delete a node from the end of the list')

    it.todo('should delete a node from a given position on the list')
})