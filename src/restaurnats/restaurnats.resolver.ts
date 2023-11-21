import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurnatsResolver {
  @Query(() => Boolean)
  isPizzaGood(): boolean {
    return true;
  }
}
