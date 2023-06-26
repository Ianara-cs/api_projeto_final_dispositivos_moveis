import { container } from "tsyringe";
import { IContactsRepository } from "../../modules/contacts/repositories/IContactsRepository";
import { ContactsRepository } from "../../modules/contacts/repositories/implementations/ContactsRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";

export enum INJECT {
    USERS_REPOSITORY = 'USERS_REPOSITORY',
    CONTACTS_REPOSITORY = 'CONTACTS_REPOSITORY'
}

container.registerSingleton<IUsersRepository>(
    INJECT.USERS_REPOSITORY,
    UsersRepository
)

container.registerSingleton<IContactsRepository>(
    INJECT.CONTACTS_REPOSITORY,
    ContactsRepository
)