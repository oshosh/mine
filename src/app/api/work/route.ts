import { NextResponse } from 'next/server';

import { getWorks } from '../../../../service/api';

export async function GET(req: Request) {
  let apiStatus = {};
  try {
    const contents = await getWorks();
    apiStatus = { status: 200 };
    return NextResponse.json(contents, apiStatus);
  } catch (error) {
    apiStatus = { status: 400 };
    return NextResponse.json({ content: null }, apiStatus);
  }
}
