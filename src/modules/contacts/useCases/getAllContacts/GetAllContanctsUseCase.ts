import { Contact } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { IContactsRepository } from "../../repositories/IContactsRepository";

@injectable()
export class GetAllContactsUseCase {
    constructor(
        @inject(INJECT.CONTACTS_REPOSITORY)
        private readonly contactsRepository: IContactsRepository,
    ) {}

    async execute(userId: string): Promise<Contact[]> {

        const contacts = await this.contactsRepository.findAllContacts(userId)

        return contacts
    }
}