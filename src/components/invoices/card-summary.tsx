import { useLingui } from "@lingui/react";
import Card from "antd/es/card/Card";
import { useAtomValue } from "jotai";
import { organizationAtom } from "src/atoms";
import { getFormattedNumber } from "src/utils/currencies";

export default function InvoiceSummary({ dataSources }: { dataSources: any[] }) {
    const { i18n } = useLingui();
    const organization = useAtomValue(organizationAtom);

    return <Card style={{ marginTop: '2rem' }}>
        <span>
            Total Invoice : {dataSources.length}
        </span>
        <span style={{ display: 'block' }}>
            Total Amount : {getFormattedNumber(dataSources.reduce((sum, inv) => sum + inv.total, 0), 'IDR', i18n.locale, organization)}
        </span>
    </Card>
}