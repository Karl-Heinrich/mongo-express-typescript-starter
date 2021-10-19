import { Response, Request } from 'express';
import { IFoo } from '../../types/foo';
import Foo from '../../models/foo.model';

const getFoo = async (req: Request, res: Response): Promise<void> => {
  try {
    // Get foo from MongoDB:
    // const foo: IFoo[] = await Foo.find();
    // For demo purposes, create a static object instead:
    const foo: IFoo[] = [
      {
        name: 'Foo',
        description: 'Some rando object, I am.',
        coolnessFactor: 9000,
      },
    ] as IFoo[];

    res.status(200).json({ foo });
  } catch (error) {}
};

export { getFoo };
