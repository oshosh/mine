import { NextResponse } from 'next/server';

import { getKeyword } from '../../../../service/api';

export async function GET(req: Request) {
  let apiStatus = {};
  try {
    const contents = await getKeyword();
    apiStatus = { status: 200 };
    return NextResponse.json(contents, apiStatus);
  } catch (error) {
    apiStatus = { status: 400 };
    return NextResponse.json({ content: null }, apiStatus);
  }
}
