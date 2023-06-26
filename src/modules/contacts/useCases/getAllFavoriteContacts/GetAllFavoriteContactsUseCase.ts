import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { Contact } from "../../entities/Contact";
import { IContactsRepository } from "../../repositories/IContactsRepository";

@injectable()
export class GetAllFavoriteContactsUseCase {
    constructor(
        @inject(INJECT.CONTACTS_REPOSITORY)
        private readonly contactsRepository: IContactsRepository,
    ) {}

    async execute(userId: string): Promise<Contact[]> {
        const contacts = await this.contactsRepository.findAllFavoriteContacts(userId)

        return contacts
    }
}