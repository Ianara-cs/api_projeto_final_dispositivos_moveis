import { inject, injectable } from "tsyringe";
import { INJECT } from "../../../../shared/container";
import { AppError, NotFoundException } from "../../../../shared/errors/AppErrors";
import { IContactsRepository } from "../../repositories/IContactsRepository";

@injectable()
export class ChangeFavoriteUseCase {
    constructor(
        @inject(INJECT.CONTACTS_REPOSITORY)
        private readonly contactsRepository: IContactsRepository
    ) {}

    async execute(userId: string, id: string): Promise<void> {
        const contact = await this.contactsRepository.findContactById(id)

        if(!contact) {
            throw new NotFoundException('Contact not found!')
        }

        if(contact.userId !== userId) {
            throw new AppError('Unauthorized operation!')
        }

        await this.contactsRepository.changeFavorite(id, !contact.isFavorite)

    }
}