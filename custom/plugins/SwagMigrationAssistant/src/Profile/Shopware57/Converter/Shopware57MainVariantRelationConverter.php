<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Profile\Shopware57\Converter;

use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\MigrationContextInterface;
use SwagMigrationAssistant\Profile\Shopware\Converter\MainVariantRelationConverter;
use SwagMigrationAssistant\Profile\Shopware\DataSelection\DataSet\MainVariantRelationDataSet;
use SwagMigrationAssistant\Profile\Shopware57\Shopware57Profile;

#[Package('services-settings')]
class Shopware57MainVariantRelationConverter extends MainVariantRelationConverter
{
    public function supports(MigrationContextInterface $migrationContext): bool
    {
        return $migrationContext->getProfile()->getName() === Shopware57Profile::PROFILE_NAME
            && $this->getDataSetEntity($migrationContext) === MainVariantRelationDataSet::getEntity();
    }
}
