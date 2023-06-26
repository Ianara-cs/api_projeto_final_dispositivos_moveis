import { Router } from "express";
import { ChangeFavoriteController } from "../../../../modules/contacts/useCases/changeFavorite/ChangeFavoriteController";
import { CreateContactController } from "../../../../modules/contacts/useCases/createContact/CreateContactController";
import { DeleteContactController } from "../../../../modules/contacts/useCases/deleteContact/DeleteContactController";
import { GetAllContactsController } from "../../../../modules/contacts/useCases/getAllContacts/GetAllContactsController";
import { GetAllFavoriteContactsController } from "../../../../modules/contacts/useCases/getAllFavoriteContacts/GetAllFavoriteContactsController";
import { GetContactController } from "../../../../modules/contacts/useCases/getContact/GetContactController";
import { UpdateContactController } from "../../../../modules/contacts/useCases/updateContact/UpdateContactController";

export const contactRoutes = Router()

const createContactController = new CreateContactController()
const getAllContactsController = new GetAllContactsController()
const getContactController = new GetContactController()
const updateContactController = new UpdateContactController()
const deleteContactController = new DeleteContactController()
const getAllFavoriteContactsController = new GetAllFavoriteContactsController()
const changeFavoriteController = new ChangeFavoriteController()


contactRoutes.post('/', createContactController.handle)
contactRoutes.get('/', getAllContactsController.handle)
contactRoutes.get('/favorites', getAllFavoriteContactsController.handle)
contactRoutes.get('/:id', getContactController.handle)
contactRoutes.put('/:id', updateContactController.handle)
contactRoutes.delete('/:id', deleteContactController.handle)
contactRoutes.patch('/:id/favorite', changeFavoriteController.handle)