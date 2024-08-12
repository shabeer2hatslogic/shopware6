<?php declare(strict_types=1);
/*
 * (c) shopware AG <info@shopware.com>
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace SwagMigrationAssistant\Profile\Shopware54\Converter;

use Shopware\Core\Framework\Log\Package;
use SwagMigrationAssistant\Migration\MigrationContextInterface;
use SwagMigrationAssistant\Profile\Shopware\Converter\CustomerWishlistConverter;
use SwagMigrationAssistant\Profile\Shopware\DataSelection\DataSet\CustomerWishlistDataSet;
use SwagMigrationAssistant\Profile\Shopware54\Shopware54Profile;

#[Package('services-settings')]
class Shopware54CustomerWishlistConverter extends CustomerWishlistConverter
{
    public function supports(MigrationContextInterface $migrationContext): bool
    {
        return $migrationContext->getProfile()->getName() === Shopware54Profile::PROFILE_NAME
            && $this->getDataSetEntity($migrationContext) === CustomerWishlistDataSet::getEntity();
    }
}
