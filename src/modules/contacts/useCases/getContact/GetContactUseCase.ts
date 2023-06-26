import { Contact } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { NotFoundException } from "../../../../shared/errors/AppErrors";
import { IContactsRepository } from "../../repositories/IContactsRepository";

@injectable()
export class GetContactUseCase {
    constructor(
        @inject(INJECT.CONTACTS_REPOSITORY)
        private readonly contactsRepository: IContactsRepository,
    ){}

    async execute(id: string): Promise <Contact> {
        const contact = await this.contactsRepository.findContactById(id)

        if(!contact) {
            throw new NotFoundException('Contact not found!')
        }

        return contact
    }
}