import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field()
  public cca2: string;

  @Field()
  public cca3: string;

  @Field()
  public ccn3: string;

  @Field()
  public cioc: string;

  @Field()
  public independent: boolean;

  @Field()
  public status: string;

  @Field()
  public unMember: boolean;

  @Field()
  public region: string;
}
